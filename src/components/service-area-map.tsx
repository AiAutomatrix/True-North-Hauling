export default function ServiceAreaMap() {
  return (
    <section id="service-area" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            Our Service Area
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Serving Winnipeg and surrounding communities. We come to you!
          </p>
        </div>
        <div className="mx-auto w-full max-w-5xl rounded-lg overflow-hidden border shadow-lg h-[300px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d329018.9749502954!2d-97.35152199999998!3d49.8524385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73fbf91a2b11%3A0x2b2a1afac6b9ca64!2sWinnipeg%2C%20MB!5e0!3m2!1sen!2sca!4v1720556191754!5m2!1sen!2sca"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Area Map for Winnipeg, MB"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
