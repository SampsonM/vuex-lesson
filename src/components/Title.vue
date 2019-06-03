<template>
    <h1>{{ foo }}</h1>
</template>

<script>
export default {
    name: 'title',
    props: {
        foo: String
    }
}
</script>

<style>
h1 {
    color: blue;
}
</style>
