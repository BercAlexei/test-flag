<template>
  <div class="office">
      <div class="office__name">
          {{ data.office }}
      </div>
      <div class="office__director">
          {{ data.director }}
      </div>
      <div class="office__tel">
          <span>{{ data.tel }}</span>
          <span>{{ data.additional_tel }}</span>
      </div>
      <a href="#" class="office__email">
          {{ data.email }}
      </a>
  </div>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>

<style lang="scss" scope>
.office {
    margin-top: 20px;
    text-align: left;
    cursor: pointer;

    &__name {
        font-size: 15px;
        font-weight: bold;
        color: #00325e;
    }
    &__director {
        margin-top: 10px;
    }

    &__tel {
        font-size: 14px;
        margin-top: 10px;
        span {
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
        }
    }

    &__email {
        margin-top: 10px;
    }

    &:first-child {
        margin-top: 0;
    }
}
</style>