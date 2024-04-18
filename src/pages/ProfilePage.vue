
<script setup>
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfilesService.js";
import Pop from "../utils/Pop.js";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { blogsService } from "../services/BlogsService.js";

const route = useRoute()

const blogs = computed(()=> AppState.profileBlogs)

const profile = computed(()=> AppState.activeProfile)

async function getProfileById(){
try {
  await profilesService.getProfileById(route.params.profileId)
} catch (error) {
  Pop.toast("Couldn't get Profile By Id", 'error')
}
}

async function getProfileBlogs(){
try {
  await blogsService.getProfileBlogs(route.params.profileId)
} catch (error) {
  Pop.toast("Couldn't get Profile Blogs", 'error')
}
}

onMounted(()=> {
  getProfileById()
  getProfileBlogs()
})
</script>


<template>

<div class="container">
  <section v-if="profile" class="row">
    <img class="cover-img" :src="profile.coverImg" alt="">
    <div class="col text-center">
      <img class="profile-img" :src="profile.picture" alt="">
    </div>
  </section>
  <section v-if="profile" class="row">
    <div class="col text-center">
      <h1>{{ profile.name }}</h1>
      <p>{{ profile.bio }}</p>
      <p>{{ profile.class }}</p>
    </div>
  </section>
<section v-if="profile" class="row">
  <div v-for="blog in blogs" :key="blog.id">
<BlogCard :blog="blog"/>
  </div>
</section>
</div>

</template>


<style lang="scss" scoped>
.cover-img{
  width: 100%;
  height: 35vh;
  object-fit: cover;
  position: center;
}
.profile-img{
  width: 100px;
  height: 100px;
  object-fit: cover;
  position: center;
}
</style>