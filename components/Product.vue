<template>
  <div>
    <DesktopNav />
    <div class="container my-20 px-6 mx-auto">
      <div class="flex justify-between">
      <h2 class="text-3xl font-bold mb-4">Products</h2>
      <div class="dropdown inline-block relative">
    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span class="mr-1">Info Category</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class="" v-for="(c, i) in categories" :key="`category${i}`">{{ c.name }}</li>
    </ul>
  </div>
      </div>
      <p class="mb-7 text-gray-500">
        this is the best product from our store please try it guaranteed you won't regret it
      </p>

      <section class="text-gray-800">

        <div class="relative mb-4 flex flex-wrap items-stretch">
  <input
    type="text"
    class="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
    v-model="search"
    placeholder="Enter Keyword..."
    aria-label="Enter Keyword..."
    aria-describedby="basic-addon1" />
</div>
<!-- <div class="flex flex-wrap l items-center lg:space-x-5 mb-5">
						<div link v-for="(c, i) in categories" :key="`category${i}`">
							<button
								class="px-3 py-2 rounded-sm text-[13px] capitalize shrink-0 mr-4 mb-4 lg:mr-0 lg:mb-0"
							>
								{{ c.name }}
							</button>
						</div>
					</div> -->
        <!-- <h1 class="lg:text-lg font-medium mb-5">
						Filter Category
						<button
							v-if="activeCategory"
							@click="setCategory(null)"
							class="px-3 rounded-sm text-[13px] capitalize bg-gray-200 ml-5"
						>
							Clear &times;
						</button>
					</h1>
					<div class="flex flex-wrap l items-center lg:space-x-5 mb-5">
						<template v-for="(c, i) in categories" :key="`categroy-${i}`">
							<button
								@click="setCategory(c)"
								:class="{
									'bg-primary-100 text-primary': c == activeCategory,
									' bg-gray-200': c !== activeCategory,
								}"
								class="px-3 py-2 rounded-sm text-[13px] capitalize shrink-0 mr-4 mb-4 lg:mr-0 lg:mb-0"
							>
								{{ c }}
							</button>
						</template>
					</div> -->
        <div class="flex flex-wrap grid sm:container xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 xl:gap-x-12">
          <div v-for="(p, i) in filteredProducts" :key="`product${p.id}-${i}`">
            <div id="default-carousel" class="relative w-full h-full" data-carousel="slide">
            <div class="relative h-56 overflow-hidden rounded-lg">
                    <img :src="p.thumbnail"
									:alt="p.title" class="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            </div>
            <div class="mt-4">
              <div class="flex justify-between">
                          <p class="font-bold text-lg">{{ p.title }}</p>
                          <span><ul class="flex justify-center">
                            <li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="mr-1 mt-0 h-5 w-5 text-warning">
                                <path
                                  fill-rule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clip-rule="evenodd" />
                              </svg>
                            </li>
                            <li>
                              {{ p.rating }}
                            </li>
                          </ul></span>
            </div>
            <p class="text-gray-500">{{ p.brand }}</p>
                        <p class="text-gray-500">
                          {{ p.category }}
                        </p>
                        <p class="font-bold text-lg mb-4">${{ p.price }} <span class="font-normal text-gray-500"></span></p>
                        <NuxtLink class="inline-block px-7 py-3 mr-2 bg-orange-500 text-white font-medium text-sm leading-snug uppercase rounded-lg shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" :to="`/products/${p.id}`" role="button"><span style="color: white;">Detail Product</span></NuxtLink>
            </div>
            </div>
          </div>
        </div>

      </section>

    </div>
    <!-- <v-container>
      <v-row dense>
        <v-col md="3">
          <div style="position: sticky; top: 92px">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              outlined
              v-model="search"
              clearable
              placeholder="Search"
            ></v-text-field>
            <v-list
              v-if="$vuetify.breakpoint.mdAndUp"
              color="transparent"
              subheader
            >
              <v-subheader>Categories</v-subheader>
              <v-list-item
                link
                v-for="(c, i) in categories"
                :key="`category${i}`"
              >
                <v-list-item-avatar>
                  <v-img :src="c.image"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ c.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col md="9">
          <v-row>
            <template v-for="(p, i) in filteredProducts">
              <v-fade-transition :key="`product${p.id}-${i}`">
                <v-col cols="12" md="6">
                  <v-card
                    nuxt
                    :to="`/products/${p.id}`"
                    color="surface"
                    class="el ma-2 mb-5 mr-5"
                  >
                    <v-img :src="p.image" height="300">
                      <template #placeholder>
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="primary"
                            indeterminate
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    <v-card-title class="text-md-body-1 font-weight-bold">{{
                      p.name
                    }}</v-card-title>
                    <v-card-subtitle class="primary--text pb-3">
                      ${{ p.price }}
                    </v-card-subtitle>
                    <v-card-text>
                      <v-chip
                        x-small
                        label
                        outlined
                        class="mr-1"
                        v-for="(t, i) in p.tags"
                        :key="`prod${p.id}-${i}`"
                      >
                        {{ t }}
                      </v-chip>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-fade-transition>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container> -->
    <br /><br />
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  async created() {
    this.products = await this.$content("products").fetch();
    this.categories = await this.$content("category").fetch();
  },
  data() {
    return {
      products: null,
      categories: null,
      search: null,
    };
  },
  computed: {
    filteredProducts() {
      if (!this.products || !this.search) return this.products;
      return this.products.filter((p) => {
        const s = this.search.toLowerCase();
        const t = p.title.toLowerCase();
        const price = p.price.toString();
        const brand = p.brand?.toString() || "";
        const r = p.rating.toString();
        return (
          t.includes(s) ||
          price.includes(s) ||
          brand.includes(s) ||
          r.includes(s)
        );
      });
    },
  },
};
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
