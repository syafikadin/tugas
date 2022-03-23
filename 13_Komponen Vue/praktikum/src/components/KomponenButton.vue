<template>
    <button @click="lakukanTambah">Submit</button>
</template>

<script>
export default {
    methods: {
        lakukanTambah(){
            this.$emit('jumlahkan')
        }
    }
}
</script>