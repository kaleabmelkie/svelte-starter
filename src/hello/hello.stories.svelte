<script lang="ts">
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Hello from './hello.svelte'
</script>

<Meta title="Examples/Hello" component={Hello} />

<Template let:args>
  <Hello {...args} />
</Template>

<Story name="world" args={{ name: 'world' }} />
<Story name="Svelte" args={{ name: 'Svelte' }} />
