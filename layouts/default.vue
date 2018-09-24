<template>
  <div>
    <at-menu mode="horizontal" active-name="2" style="width:100%">
      <at-menu-item name="1" to='/maps'><i class="icon icon-map-pin"></i>Maps</at-menu-item>
      <at-menu-item name="2" to="/message"><i class="icon icon-message-square"></i>Message</at-menu-item>
      <at-menu-item name="3" to="/heart"><i class="icon icon-heart-on"></i>Heart</at-menu-item>
      <at-menu-item name="4" to="/settings"><i class="icon icon-settings"></i>Settings</at-menu-item>
    </at-menu>
    <nuxt/>
  </div>
</template>

<style scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}


.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

