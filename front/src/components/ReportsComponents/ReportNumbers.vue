<template>
    <div class="row justify-start q-mb-md">
        <div class="col-3 icon-box" :class="color">
            <i class="report-icon" :class="icon"></i>
        </div>
        <div class="col-8 q-pl-sm">
            <p class="report-number">{{number}}</p>
            <p class="report-name">{{title}}</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ReportNumbers',
  props: {
    title: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.report-icon {
    margin: auto;
    font-size: 25px;
    color: #FAFAFA;
}

.icon-box {
    width: 65px !important;
    height: 65px !important;
    display: flex;
    border-radius: 10px;
}

.red-icon {
    background-color: #EB4335;
}

.green-icon {
    background-color: #34A853;
}

.blue-icon {
    background-color: #4285F4;
}

.report-number {
    margin: 0px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 22px;
    color: #41444B;
}

.report-name {
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #787878;
}
</style>
