interface BlogPostFrontmatter {
    title: string;
    date: string;
    urlImg: string;
}
interface IndexPosts{
    titleS: string;
}
interface Hero{
        heading2: string;
        heading1: string;
        heading2_b: string;
        blick: string;
        heading4: string;
        heading2_c: string;
}

export type {
    BlogPostFrontmatter,
    IndexPosts,
    Hero
}