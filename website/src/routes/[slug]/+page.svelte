<script lang="ts">
    import { page } from "$app/stores";
    import ContentNarrow from "$lib/components/ContentNarrow.svelte";
    import { recipes } from "$lib/stores/recipes";
    import Head from "$lib/components/Head.svelte";
    import ShoppingList from "./ShoppingList.svelte";

    const slug = $page.params.slug;
    const r = $recipes.get(slug);
    const planCheckmarks: boolean[] = [];
</script>

<Head recipe={r}/>

<ContentNarrow title={r.title}>
    <img class="rounded-lg drop-shadow-lg"
         title={r.title} loading="eager"
         src={`${r.image}/1260/540`} alt={r.title}
         height="300" width="700">
    <p class="m-0">{r.longDesc}</p>

    <ShoppingList recipe={r}/>

    <h2>Planen</h2>
    <div class="flex flex-col gap-4 rounded-lg p-4 drop-shadow-lg bg-secondary text-secondary-content">
        {#each r.steps as s,id}
            <div class="flex gap-4">
                <input id={s.title} type="checkbox" bind:checked={planCheckmarks[id]}
                       class="mt-1 checkbox bg-neutral-content text-neutral-content">
                <div class="flex flex-col">
                    <label for={s.title}
                           class="font-bold text-base mt-1 transition-opacity"
                           class:line-through={planCheckmarks[id]}
                           class:opacity-50={planCheckmarks[id]}>
                        {s.title}
                    </label>

                    <p class="m-0 transition-opacity"
                       class:line-through={planCheckmarks[id]}
                       class:opacity-50={planCheckmarks[id]}>
                        {s.desc}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</ContentNarrow>
