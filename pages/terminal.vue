<template>
  <div>terminal</div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

if (process.server == false) {
  navigator.usb.requestDevice({ filters: [] }).then(usbDevice => {
    usbDevice
      .open()
      .then(() => {
        let encoder = new TextEncoder()
        let buffer = encoder.encode('\n\n\nHello world\n\n\n')

        // Input endpoint
        const endpoint =
          usbDevice.configuration.interfaces[0].alternate.endpoints[0]
            .endpointNumber

        // Print
        usbDevice.transferOut(endpoint, buffer)
        console.log('Success').catch(error => {
          console.warn(error)
        })
      })
      .catch(() => console.error('Bye bye'))
  })
} else {
  console.log('nonsense!', process)
}

// Encode
</script>

<style lang="scss" scoped></style>
