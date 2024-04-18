<script setup>
import { Blog } from "../models/Blog.js";



defineProps({blog: {type: Blog, required: true}})


</script>


<template>
  <RouterLink :to="{name: 'BlogDetails' , params: {blogId: blog.id}}">
      <div class="card text-start">
        <div class="card-body selectable row">
          <div class="col-10 ">
            <!-- <p>{{ blog.id }}</p> -->
            <h4>{{blog.creator.name}}</h4>
            <h4 class="card-title">{{blog.title}}</h4>
            <p class="card-text">{{blog.body}}</p>
          </div>
          <div class="col-2">
            <img class="img-fluid" :src="blog.imgUrl" alt="TEST">
          </div>
        </div>
      </div>
      </RouterLink>
      </template>

<style lang="scss" scoped>

</style>