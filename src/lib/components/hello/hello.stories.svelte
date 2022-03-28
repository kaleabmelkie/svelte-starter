<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Hello from './hello.svelte'
</script>

<Meta title="Example/Hello" component={Hello} />

<Template let:args>
  <Hello {...args} />
</Template>

<Story name="World" args={{ name: 'World' }} />
