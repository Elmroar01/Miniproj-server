<script>
    import "../../../app.postcss";
    import { Carousel, CarouselTransition } from "flowbite-svelte";
    let showThumbs=false
  let showCaptions=false
    
    // ./imageData/+server.js has the following
    export const images = [
        {
            id: 0,
            name: "Cosmic timetraveler",
            imgurl: "https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSCIwHURLRI2kXMMyZOapWBFEOroOv.jpg",
            attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
        },
        {
            id: 1,
            name: "Cristina Gottardi",
            imgurl: "https://s.isanook.com/ns/0/ud/1601/8006434/thumbnail(34).jpg",
            attribution: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
        },
    ];
</script>

<div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
    <p class="text-4xl">Welcome PTT TAS</p>
    <p class="mt-40"></p>
<div class="max-w-4xl h-max">
    <CarouselTransition {images} loop transitionType="fade" transitionParams="{{ duration: 1000 }}" showCaptions={false} showThumbs={false} duration="5000" />
  </div>
</div>