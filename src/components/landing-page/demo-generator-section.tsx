import DemoGeneratorForm from './demo-generator-form';

export default function DemoGeneratorSection() {
  return (
    <section id="demo-generator" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            See <span className="text-accent">Balder</span> in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Curious about Balder's capabilities? Generate a custom demo script based on a customer need you provide. Witness how Balder navigates interactions and drives solutions.
          </p>
        </div>
        <DemoGeneratorForm />
      </div>
    </section>
  );
}
