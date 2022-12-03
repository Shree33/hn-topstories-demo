import { getItem, getTopStoryIDs } from "../../lib/api";
import Date from "../../components/date";
import Layout from "../../components/Layout";
import {getComments} from "../../components/commentList";
import Link from "next/link";

export async function getStaticProps({params}) {
    const story = await getItem(params.id);
    return {
        props: {
            story,
        },
    };
}

export async function getStaticPaths() {
    const storyIDs = await getTopStoryIDs();
    const paths = storyIDs.map((id: { toString: () => any; }) => ({
        params: { id: id.toString() },
    }));
    return { paths, fallback: false };
}


export default function Story({ story }): JSX.Element {
    return (
        <Layout title={story.title} backButton={true}>
            <main>
                <h1 className="story-title">
                <Link href={story.url}> {story.title} </Link>
                </h1>
                <div className="story-details">
                    <strong>{story.score} points</strong>
                    <strong>{story.kids.length} comments</strong>
                    <strong><Date dateString={story.time}/></strong>
                </div>
            </main>
            {getComments(story.kids)}    
        </Layout>
    );
}