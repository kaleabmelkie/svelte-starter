<script lang="ts">
  export let primary = false
</script>

<button
  class="
  px-6 py-4
  rounded-full
  font-semibold
  hover:shadow-sm active:shadow-inner
  hover:translate-y-[-1px] active:translate-y-0 active:scale-[.99]
  transition-all

  {primary
    ? 'bg-indigo-600 text-indigo-50 hover:text-white'
    : 'border border-gray-100 hover:border-gray-200 bg-white text-gray-700 hover:text-black'}
  "
>
  <slot />
</button>
