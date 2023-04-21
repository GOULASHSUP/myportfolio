<template><!--
  about-section
-->
    <section class="bg-background pb-24" id="about-section">
      <div
        class="mx-12 flex flex-col lg:items-center lg:mx-36 lg:grid max-w-screen-4xl py-8 lg:grid-cols-12 lg:gap-8 lg:py-28 xl:gap-0"
      >
        <div class="lg:mr-auto flex flex-col lg:col-span-7 lg:justify-center">
          <h1
            class="flex justify-center mb-4 max-w-2xl text-4xl font-bold leading-none md:text-5xl xl:text-7xl text-lightgray"
          >
            About
          </h1>
          <p
            class="flex justify-center lg:justify-start text-green font-semibold text-4xl mb-6 max-w-2xl font-light lg:mb-8 lg:text-4xl"
          >
            Simon Jobbágy
          </p>
        </div>
        <div class="lg:col-span-5 flex justify-center lg:mt-0">
          <img
            src="../assets/profile-pic-2.png"
            class="h-72 rounded-full lg:h-96"
            alt="profile picture"
          />
        </div>
      </div>
<!--About text-->
      <div class="flex flex-col w-auto gap-4 lg:flex-row">
        <div class="text-lightgray lg:w-1/2 bg-background lg:pl-44 pl-12 lg:pr-16 pr-12 text-xl">
            <p class="pb-5">My Name is Simon Jobbágy and I am coming from Hungary where I lived for 19 years.</p>
            <p class="pb-5">I studied in a Waldorf Primary and High School where I learned about creativity and how I can create awesome stuff with my own imagination and hands. </p>
            <p class="pb-5">After my high school years, I moved to Denmark where I study multimedia design. Throughout this programme, I learned how to work with programs such as Adobe Indesign, Illustrator and Photoshop to create my own material and pictures for projects that I am involved in. </p>
            <p class="pb-5">I also gained experience in how to use Visual Studio Code, together with Vue to develop websites using HTML, CSS and JavaScript. </p>
            <p class="pb-5">So by using these programs, I can create design for projects and websites as well. 
                            If you are interested in what I did before or in what kind of projects I worked on previously, you can check the "Projects" menu on this site.</p>
            <p class="pb-5">I am a hardworking person who enjoys challenges and projects where I can try out new techniques and gather knowlage.</p>

        </div>

        <div class="text-lightgray lg:w-1/2 lg:pr-36 pr-12 lg:pl-16 pl-12 text-xl">
            
            <p class="pb-5">On this page you can read about some of my previous projects under the "Projects" menu where I talk about my experiences regarding my work.</p>
            <p class="pb-5 pb-16">For additional information about me you can download my CV by clicking <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-2023-e95a9.appspot.com/o/simon-cv.pdf?alt=media&token=b1ebde37-48a4-47db-af5f-91ec5ef72e01" class="text-purple hover:text-green ease-in duration-150" target="_blank"> >here </a>  or you can watch my video CV below.</p>
            <div class="aspect-h-9 aspect-w-16">
              <iframe
                src="https://www.youtube.com/embed/JoUMAnKnnMg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
        </div>
      </div>

      <div
        class="mx-12 flex flex-col lg:items-center lg:mx-36 lg:grid max-w-screen-4xl py-8 lg:grid-cols-12 lg:gap-8 lg:pt-28 lg:pt-12 xl:gap-0 "
      >
        <div class="lg:mr-auto flex flex-col lg:col-span-7">
          <p
            class="flex justify-center lg:justify-start text-green font-semibold text-4xl lg:pt-16 mb-6 max-w-2xl font-light lg:mb-8 lg:text-4xl"
          >
            My skills
          </p>
        </div>
      </div>

<!--text for skills-->
      <div class="flex w-auto gap-4">
        <div class="text-lightgray lg:w-1/2 bg-background lg:pl-44 pl-12 lg:pr-16 pr-12 text-xl">
          <h2 class="text-green text-2xl pb-6"> >Frontend development</h2>
          <p class="pb-5">I like to work with Visual Studio Code where I use HTML to create the structure of my websites, CSS and SCSS to design and tweak it to fit into my concept, and JavaScript to create functionalities like buttons, links and animations on the site.</p>
          <p class="pb-5">I learned how to use Vue to make the flow of my website better and easier to follow not only for myself, but also for an outside viewer who might want to use and change the website. </p>
        </div>

        <div class="lg:flex lg:justify-center lg:items-center lg:w-1/2 hidden lg:block">
          <img src="../assets/html-logos.png" alt="development logos" class="h-72">
        </div>
      </div>

      <div class="flex w-auto gap-4">
        <div class="text-lightgray lg:w-1/2 bg-background lg:pr-24 pr-12 lg:pl-44 pl-12 text-xl">
          <h2 class="text-green text-2xl pt-10 pb-6"> >Design</h2>
          <p class="pb-5">I studied at the Business Academy SouthWest (EASV) in Esbjerg (Denmark) where I learned about design, how I can use virtual tools to create logos and visual elements for my own and for my clients' websites, posters, and other visual elements. </p>
          <p class="pb-5">In my first semester I learned how to use Adobe programs such as Illustrator to design logos and vector graphics not only by following my own intuition, but by using rules and guidelines, to develop and reach the best possible result.</p>
          <p class="pb-5">I also gained knowledge about Adobe InDesign and how I can use it to create documentations or reports properly for my projects and for the clients as well. </p>
        </div>

        <div class="lg:flex lg:justify-center lg:items-center lg:w-1/2 hidden lg:block">
          <img src="../assets/logos.png" alt="design logos" class="h-64">
        </div>
      </div>
    </section>
  </template>
  
  
  
  <script setup>
  </script>