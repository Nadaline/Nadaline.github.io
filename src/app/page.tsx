import Image from "next/image";
import FadeUp from "@/components/FadeUp";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background glow */}
      <div className="absolute inset-0">

        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-3xl" />

      </div>

     {/* Hero */}
     <section
       id="home"
       className="relative isolate flex items-center justify-center min-h-screen overflow-hidden"
     >

       {/* Background image */}
       <div className="absolute inset-0 -z-10">

         <Image
           src="/images/landscape.jpg"
           alt="Landscape"
           fill
           className="object-cover"
         />

         {/* Dark overlay */}
         <div className="absolute inset-0 bg-black/20" />

         {/* Gradient overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

       </div>

       {/* Content */}
       <FadeUp>

         <div className="relative z-10 px-6 text-center">

           <p className="mb-6 text-xs uppercase tracking-[0.4em] text-zinc-300">
             Evolutionary Biology • Bioinformatics • Environmental Consulting
           </p>

           <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
             
             <br />
            Júnior Nadaline
           </h1>

           <p className="max-w-2xl mx-auto text-zinc-300 text-lg leading-relaxed">
             Evolutionary biologist, bioinformatician and environmental consultant
             working with biodiversity, genomics, climate change and scientific communication.
           </p>

           <div className="mt-12 flex gap-4 flex-wrap justify-center">

             <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition duration-300">
               Publications
             </button>

             <button className="px-6 py-3 border border-zinc-400 text-white rounded-full hover:bg-white/10 transition duration-300">
               Contact
             </button>

           </div>

         </div>

       </FadeUp>

     </section>
      {/* About section */}
      <section id="about"
      className="relative z-10 max-w-6xl mx-auto px-6 py-32">

      <div className="grid md:grid-cols-2 gap-16 items-center">

      <div>
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
        About
      </p>

      <h2 className="text-4xl font-bold mb-6">
        Field biology meets computational science.
      </h2>

      <p className="text-zinc-400 leading-relaxed mb-6">
        I work at the intersection of evolutionary biology,
        genomics, biodiversity conservation and environmental change.
      </p>

      <p className="text-zinc-400 leading-relaxed">
        My research combines field expeditions, landscape genomics,
        bioinformatics and environmental data science to understand
        how species respond to climate and ecological gradients.
      </p>
    </div>

    <div className="relative h-[500px] overflow-hidden rounded-3xl border border-zinc-800">

  <Image
    src="/images/Fotografia.Junior_Nadaline.JPG"
    alt="Field work"
    fill
    className="object-cover"
  />

</div>

  </div>

</section>
      {/* Projects */}
<section id="Projects"
className="relative z-10 max-w-6xl mx-auto px-6 py-32">

  <div className="mb-16">

    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
      Projects
    </p>

    <h2 className="text-4xl font-bold">
      Research, consulting and computational workflows.
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Card */}
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-zinc-700 hover:-translate-y-2 transition duration-300">

      <div className="relative h-56">

        <Image
          src="/images/genomics.jpg"
          alt="Genomics"
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
          Genomics
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Landscape Genomics
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          Investigating climate adaptation and lineage divergence
          using RADseq and environmental gradients.
        </p>

      </div>

    </div>

    {/* Card */}
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-zinc-700 hover:-translate-y-2 transition duration-300">

      <div className="relative h-56">

        <Image
          src="/images/consulting.jpg"
          alt="Genomics"
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
          Environmental Consulting
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Wildlife Monitoring
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          Field monitoring, biodiversity surveys and environmental
          impact assessments focused on herpetofauna.
        </p>

      </div>

    </div>

    {/* Card */}
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/40 overflow-hidden hover:border-zinc-700 hover:-translate-y-2 transition duration-300">

      <div className="relative h-56">

        <Image
          src="/images/linux.jpg"
          alt="Genomics"
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">
          Tutorials
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Linux for Biologists
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          Practical guides for Linux, R, Python and bioinformatics
          workflows designed for biologists.
        </p>

      </div>

    </div>

  </div>

</section>
<footer id="contact"
className="relative z-10 border-t border-zinc-800 mt-32">

  <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">

    <div>
      <h3 className="font-semibold mb-2">
        Júnior Nadaline
      </h3>

      <p className="text-zinc-500 text-sm">
        Evolutionary biology, bioinformatics and environmental consulting.
      </p>
    </div>

    <div className="flex gap-6 text-sm text-zinc-500">

      <a
        href="https://github.com/Nadaline"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        GitHub
      </a>

      <a
        href="https://scholar.google.com/citations?user=GVuCWxEAAAAJ&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        Google Scholar
      </a>

      <a
        href="mailto:jr.nadaline@gmail.com"
        className="hover:text-white transition"
      >
        Email
      </a>
    </div>

  </div>

</footer>
    </main>
  );
}