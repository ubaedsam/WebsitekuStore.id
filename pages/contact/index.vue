<template>
<div>
  <DesktopNav />
    <section class="text-gray-800 text-center">
      <HeroContact></HeroContact>
      <div class="px-6 py-12 md:px-12">
        <div class="container mx-auto">
          <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 flex items-center">
            <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
              <div
                class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px)"
              >
              <h2 class="text-3xl text-orange-500 font-bold mb-12">Contact us</h2>
              <form>
                <div class="form-group mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-orange-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Your Name :"
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="email"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-orange-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Your Email Address :"
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="email"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-orange-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Your Mobile Number :"
                  />
                </div>
                <div class="form-group mb-6">
                  <input
                    type="email"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-orange-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Subject :"
                  />
                </div>
                <div class="form-group mb-6">
                  <textarea
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-orange-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" class="w-full inline-block px-7 py-3 mr-2 bg-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out">
                  Submit Message
                </button>
              </form>
              </div>
            </div>
            <div class="md:mb-12 lg:mb-0">
              <div class="map-container relative shadow-lg rounded-lg">
                <iframe
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                class="absolute left-0 top-0 h-full w-full rounded-lg"
                frameborder="0"
                allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    <ScrollTop />
</div>
</template>

<style>
    .map-container {
        height: 700px;
        z-index: -1;
    }
</style>

<!-- <script>
export default {
  name: 'Contact'
}
</script> -->