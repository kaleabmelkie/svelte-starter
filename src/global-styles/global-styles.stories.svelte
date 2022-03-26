<script>
  import { Template } from '@storybook/addon-svelte-csf'
  import GlobalStyles from './global-styles.svelte'
</script>

<Template let:args>
  <GlobalStyles {...args} />
</Template>
