<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
  import Button from './button.svelte'
</script>

<Meta title="Examples/Button" component={Button} />

<Template let:args>
  <Button {...args}>Button</Button>
</Template>

<Story name="Default" args={{}} />

<Story name="Primary" args={{ primary: true }} />
