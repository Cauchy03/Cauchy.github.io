HTML notes
:tada: :100:

[[toc]]

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::


```js
export default {
  name: 'MyComponent',
  // ...
}
```
{{ 1 + 1 }}
<span v-for="i in 3">{{ i }} </span>




<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>

<pre>{{ page }}</pre>



::: v-pre
`{{ This will be displayed as-is }}`
:::
