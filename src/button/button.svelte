<script lang="ts">
  export let primary = false
</script>

<button
  {...$$restProps}
  class="
  px-6 py-4
  border border-gray-100 focus:border-gray-200 rounded-md
  font-semibold
  bg-white text-gray-700 focus:text-black
  hover:shadow-sm
  transition-all

  {primary ? 'bg-indigo-600 text-white' : ''}

  {$$restProps.class ?? ''}
  "
>
  <slot />
</button>
