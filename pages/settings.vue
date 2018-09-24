<template>
    <section>
<at-menu active-name="1-1" inline-collapsed style="width:100%">
  <at-submenu>
    <template slot="title"><i class="icon icon-user"></i>Profile</template>
    <at-menu-item name="1-1">Name</at-menu-item>
    <at-menu-item name="1-2">Gender</at-menu-item>
    <at-menu-item name="1-3">Birthday</at-menu-item>
    <at-menu-item name="1-4">Height</at-menu-item>
    <at-menu-item name="1-5">Weight</at-menu-item>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Medical Data</template>
    <at-menu-item name="2-1">Medical Condition</at-menu-item>
    <at-menu-item name="2-2">Doctor's Diagnosis</at-menu-item>
    <at-menu-item name="2-3">Heart Rate Data</at-menu-item>
    <at-menu-item name="2-4">Misc</at-menu-item>
  </at-submenu>
  <at-menu-item to="/logout"><i class="icon icon-home"></i>Log out</at-menu-item>
</at-menu>

    </section>
</template>

<script>
  export default {
    methods: {
      modalConfirm () {
        this.$Modal.confirm({
          title: 'Log out?',
          content: 'Are you sure you want to log out?'
        }).then(() => {
          this.$Message('Click \'Confirm\' Button')
        }).catch(() => {
          this.$Message('Click \'Cancel\' Button')
        })
      }
    }
  }
</script>