"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useTransition } from "react";
import { generateBalderDemo, type GenerateBalderDemoOutput } from "@/ai/flows/generate-balder-demo";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const demoFormSchema = z.object({
  customerNeed: z.string().min(10, { message: "Customer need must be at least 10 characters long." }).max(500, { message: "Customer need must be 500 characters or less."}),
});

type DemoFormValues = z.infer<typeof demoFormSchema>;

export default function DemoGeneratorForm() {
  const [isPending, startTransition] = useTransition();
  const [demoResult, setDemoResult] = useState<GenerateBalderDemoOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      customerNeed: "",
    },
  });

  function onSubmit(data: DemoFormValues) {
    setError(null);
    setDemoResult(null);
    startTransition(async () => {
      try {
        const result = await generateBalderDemo({ customerNeed: data.customerNeed });
        setDemoResult(result);
        toast({
          title: "Demo Generated!",
          description: "Balder's demo script is ready below.",
        });
      } catch (e) {
        console.error(e);
        const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";
        setError(errorMessage);
        toast({
          title: "Error Generating Demo",
          description: errorMessage,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Generate a Balder Demo</CardTitle>
          <CardDescription>
            Enter a customer scenario and see how Balder can handle it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="customerNeed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold">Describe a Customer Need or Problem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'A customer is asking about the warranty on a newly purchased laptop.'"
                        className="resize-none min-h-[120px] text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Provide a scenario Balder might encounter.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                {isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Wand2 className="mr-2 h-5 w-5" />}
                Generate Demo Script
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="border-destructive bg-destructive/10 shadow-lg">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center">
              <Wand2 className="mr-2 h-5 w-5" /> Generation Failed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive-foreground">{error}</p>
          </CardContent>
        </Card>
      )}

      {demoResult && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Generated Demo Script for Balder</CardTitle>
            <CardDescription>This script showcases Balder addressing the specified customer need.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-4 rounded-md max-h-[400px] overflow-y-auto">
              <pre className="whitespace-pre-wrap text-sm font-code text-foreground/90">{demoResult.demoScript}</pre>
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">This demo is AI-generated and may require fine-tuning for specific use cases.</p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
