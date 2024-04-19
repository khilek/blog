<script setup>
import { computed, onMounted } from "vue";
import { AppState } from "../AppState.js";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js";

const account = (()=> AppState.account)

const blog = computed(()=> AppState.blogs)

const activeBlog = computed(()=> AppState.activeBlog)

const route = useRoute()

async function getBlogById(){
try {
  
  await blogsService.getBlogById(route.params.blogId)

} catch (error) {
  Pop.toast ("Couldn't get Blog By Id")
}

}

onMounted(() => {
  getBlogById()
})
</script>


<template>

      <div class="card text-start">
        <div v-if="activeBlog" class="card-body row">
          <div class="col-10 ">
            <RouterLink :to="{name: 'Profile', params:{profileId: activeBlog.creatorId} }">
              <h4>{{activeBlog.creator.name}}</h4>
            </RouterLink>
            <h4 class="card-title">{{activeBlog.title}}</h4>
            <p class="card-text">{{activeBlog.body}}</p>
          </div>
          <div class="col-2">
            <img class="img-fluid" :src="activeBlog.imgUrl" alt="Cover Image">
          </div>
        </div>
      </div>
</template>


<style lang="scss" scoped>

</style>