<script>
    let sitemap = [
        {
            title: "About", 
            url:"/",
            options: []
        },
        {
            title: "Projects",
            url:"/projects",
            options: [
                {title:"Overview", url:"/projects"},
                {title:"CNN Visualisations", url:"/projects#cnn-visualisations"},
                {title:"Cambridge Restaurant Exploration", url:"/projects#cambridge-restaurants"},
                {title:"Neural Word Embeddings", url:"/projects#nwe"}
            ]
        },
        {
            title: "Articles",
            url: "/articles",
            options: []
        },
        {
            title: "Contact",
            url: false,
            options: [
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
                    {#if s.url}
                        <h2 class="text-m text-theme1 uppercase mb-5 font-semibold tracking-wider"><a href={s.url}>{@html s.title}</a></h2>
                    {:else}
                        <h2 class="text-m text-theme1 uppercase mb-5 font-semibold tracking-wider">{@html s.title}</h2>
                    {/if}
                    <ul>
                        {#each s.options as o}
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
    }/*
    h2::before{
        content: '';
        position: absolute;
        left:0;
        bottom: -10px;
        background-color: rgb(82, 71, 96);
        height: 2px;
        box-sizing: border-box;
        width: 50px;
    }*/
    .footer-col ul li:not(:last-child){
        margin-bottom: 10px;
    }
    .footer-col ul li a{
        font-size: 10px;
        text-transform: capitalize;
        color: rgb(20, 84, 191);
        text-decoration: none;
        font-weight: 300;
        display: block;
        transition: all 0.3s ease;
    }
    .footer-col ul li a:hover{
        color: rgb(20, 84, 191);
        padding-left: 8px;
    }
    .footer-col .social-links a{
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgba(255,255,255,0.2);
        margin:0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: rgb(20, 84, 191);
        transition: all 0.5s ease;
    }
    .footer-col .social-links a:hover{
        color: #24262b;
        background-color: rgb(20, 84, 191);
    }
</style>