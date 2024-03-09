type Advantages = {
    id: number;
    title: string;
    style: string;
}

const advantages: Advantages[] = [
    { id: 1, title: "Швидка доставка", style: "text-2xl w-1/5 top-20 absolute left-1/4 p-3 -ml-12 rounded-lg bg-gradient-to-r from-black to-purple-700" },
    { id: 2, title: "Найдешевші товари", style: "text-2xl w-1/5 bottom-20 absolute left-1/4 -ml-12 p-3 rounded-lg bg-gradient-to-r from-black to-purple-700" },
    { id: 3, title: "Найкращі ціни", style: "text-2xl w-1/5 top-20 absolute right-1/4 -mr-12 p-3 rounded-lg bg-gradient-to-r from-purple-700 to-black" },
    { id: 3, title: "Найякісніші товари", style: "text-2xl w-1/5 bottom-20 absolute right-1/4 -mr-12 p-3 rounded-lg bg-gradient-to-r from-purple-700 to-black" },
];
export default function Advantages() {
    return (
        <div style={{ height: "100vh" }}>
            <h1 className="text-5xl text-center">Переваги нашого магазину</h1>
            <div className="flex justify-center items-center relative mt-5">
                <img
                    className="relative rounded-lg"
                    src="https://s3-media0.fl.yelpcdn.com/bphoto/Dw2dQ5ErD2lmnUwqVljaFQ/1000s.jpg"
                    alt="advantages_img"
                    style={{ width: "40%" }}
                />
                <div>
                    {advantages.map((item) => (
                        <p
                            key={item.id}
                            className={item.style}
                            style={{ zIndex: 1 }}
                        >
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
                {/*<ul>*/}
                {/*    {posts.map((post) => (*/}
                {/*        <li key={post.id}>*/}
                {/*                <h2>{post.title}</h2>*/}
                {/*            <p>{post.body}</p>*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
        </div>
    );
}