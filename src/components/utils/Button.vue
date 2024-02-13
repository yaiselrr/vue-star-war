<template>
    <div>
        <button class="btn btn-primary btn-sm">{{msg}}</button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props:{
        msg: String
    }
};
</script>