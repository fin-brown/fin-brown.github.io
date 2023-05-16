<script>
    let sitemap = [
        {
            title: "About", 
            url:"/",
            sections: []
        },
        {
            title: "Projects",
            url:"/projects",
            sections: [
                {title:"Overview", url:"/projects"},
                {title:"CNN Visualisations", url:"/projects#cnn-visualisations"},
                {title:"Cambridge Restaurant Exploration", url:"/projects#cambridge-restaurants"},
                {title:"Neural Word Embeddings", url:"/projects#nwe"}
            ]
        },
        {
            title: "Articles",
            url: "/articles",
            sections: []
        },
        {
            title: "Contact",
            url: false,
            sections: [
                {title:"LinkedIn", url:"https://www.linkedin.com/in/fin-brown-937070134/"},
                {title:"GitHub", url:"https://github.com/fin-brown"},
                {title:"Twitter", url:""},
                {title:"Email", url:"mailto:fin.brown51@gmail.com"},
            ]
        }
    ]
</script>

<!--- https://alvarotrigo.com/blog/website-footers/ -->
<footer class="bg-theme2 pt-8">
    <div class="container">
        <div class="row">
            {#each sitemap as s}
                <div class="w-1/4 pr-5">
                    <h2 id="{s.title.toLowerCase()}" class="text-m text-theme1 uppercase mb-5 font-semibold tracking-wider">
                        {#if s.url}
                            <a href={s.url}>{@html s.title}</a>
                        {:else}
                            {@html s.title}
                        {/if}

                    <ul>
                        {#each s.sections as o}
                            <li><a href={o.url}>{@html o.title}</a></li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
</footer>

<style>
    .container{
        max-width: 1170px;
        margin:auto;
    }
    .row{
        display: flex;
        flex-wrap: wrap;
    }
    ul{
        list-style: none;
        padding: 0;
        line-height: 1.5;
    }
</style>