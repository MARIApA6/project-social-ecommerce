import "./Threads.css";
import myimg from "../../assets/images/1.jpg";
import ThreadCard from "../Thread/ThreadCard";

function Threads() {

    return (
        <section className="threadsPage">
            <h1 className="posts_title">Posts</h1>
            <div className="threadsPage_grid">
                {mockThreads.map(thread => (
                    <ThreadCard
                        key={thread.id}
                        title={thread.title}
                        image={thread.image}
                        date={thread.date}
                        itemsCount={thread.itemsCount}
                        sourceUrl={thread.sourceUrl}
                    />
                ))}
            </div>
        </section>
    );
}

const mockThreads = [
    {
        id: "1",
        title: "שרשור-זארה",
        date: "27.1.26",
        image: myimg,
        itemsCount: 24,
        sourceUrl: "https://facebook.com/...",
    },
    {
        id: "2",
        title: "שרשור פול אנד בר",
        date: "26.1.26",
        image: "https://via.placeholder.com/600x350?text=Pull+And+Bear",
        itemsCount: 25,
        sourceUrl: "https://facebook.com/...",
    },
    {
        id: "3",
        title: "שרשור מנגו",
        date: "25.1.26",
        image: "https://via.placeholder.com/600x350?text=Mango+Thread",
        itemsCount: 18,
        sourceUrl: "https://facebook.com/...",
    },
    {
        id: "4",
        title: "שרשור ברשקה",
        date: "24.1.26",
        image: "https://via.placeholder.com/600x350?text=Bershka+Thread",
        itemsCount: 31,
        sourceUrl: "https://facebook.com/...",
    },
    {
        id: "5",
        title: "שרשור סטרדיווריוס",
        date: "23.1.26",
        image: "https://via.placeholder.com/600x350?text=Stradivarius",
        itemsCount: 14,
        sourceUrl: "https://facebook.com/...",
    },
    {
        id: "6",
        title: "שרשור H&M",
        date: "22.1.26",
        image: "https://via.placeholder.com/600x350?text=H%26M+Thread",
        itemsCount: 27,
        sourceUrl: "https://facebook.com/...",
    },
    {
        id: "7",
        title: "שרשור אסוס",
        date: "21.1.26",
        image: "https://via.placeholder.com/600x350?text=ASOS+Thread",
        itemsCount: 42,
        sourceUrl: "https://facebook.com/...",
    },
    {
        id: "8",
        title: "שרשור טרמינל X",
        date: "20.1.26",
        image: "https://via.placeholder.com/600x350?text=Terminal+X",
        itemsCount: 20,
        sourceUrl: "https://facebook.com/...",
    }
]

export default Threads;
