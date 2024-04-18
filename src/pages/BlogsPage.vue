<script setup>
import { computed, onMounted } from "vue";
import { api } from "../services/AxiosService.js";
import { blogsService } from "../services/BlogsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";

 const blogs = computed(() => AppState.blogs)

async function getBlogs(){
try {
await blogsService.getBlogs()
} catch (error) {
  Pop.toast("Couldn't get Blogs")
  logger.log (error)
}
}

onMounted(()=>{
  getBlogs()
})
</script>


<template>
<div class="container">
  <section class="row">
    <div v-for="blog in blogs" :key="blog.id" class="col-12 p-1 mb-1">
 <BlogCard :blog="blog"/>
<div>

</div>

    </div>

  </section>


</div>


</template>


<style lang="scss" scoped>

</style>