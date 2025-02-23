import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";
import { useNavigate } from "react-router-dom";
import img1 from "./dante-hades-00028-2774189729.jpg";
import img3 from "./img3.jpg";
import img7 from "./img7.png";
import img10 from "./img10.png";
import img8 from "./img8.png";
import img11 from "./11.avif";
import img12 from "./12.webp";
import img13 from "./13.jpg";
import img14 from "./14.jpg";
import img15 from "./15.jpg";
import img16 from "./16.jpg";
import img17 from "./17.png";
import img18 from "./18.jpg";
import img19 from "./19.jpg";
import img20 from "./images.jpg";

const blogs = [
  { id: 11, title: "BEST Tentacle Hentai Shows You Won't Forget (NSFW)", tags: ["Hentai, ", "NSFW, ", "New"], img: img1, date: "1/02/2025" },
  { id: 14, title: "Best Girls With The Biggest Boobies In Hentai", tags: ["Hentai, ", "NSFW, ", "New"], img: img13, date: "29/01/2025" },
  { id: 4, title: "10+ Best Uncensored Anime To Watch (Gore + Ecchi 2024 Update)", tags: ["Anime, ", "New"], img: img3, date: "10/01/2025" },
  { id: 1, title: "11+ Of The Greatest Hentai Anime Series", tags: ["Hentai, ", "Anime, ", "NSFW"], img: img14, date: "06/01/2025" },
  { id: 2, title: "Hottest Anime Girls", tags: ["Anime"], img: img15, date: "02/01/2025" },
  { id: 3, title: "Best Anime Waifus 2024", tags: ["Anime"], img: img16, date: "01/01/2025" },
  { id: 6, title: "The Top 11 Male OnlyFans Creators", tags: ["OnlyFans, ", "NSFW"], img: img10, date: "31/12/2024" },
  { id: 7, title: "Sex Toys Guide", tags: ["Educational, ", "NSFW"], img: img8, date: "31/12/2024" },
  { id: 8, title: "6 Simple Sex Positions Designed to Hit Your G-Spot Every Time", tags: ["Educational, ", "NSFW"], img: img11, date: "28/12/2024" },
  { id: 5, title: "10 Best OnlyFans Accounts", tags: ["OnlyFans, ", "NSFW"], img: img7, date: "26/12/2024" },
  { id: 10, title: "11 Characters Who Always Make An Appearance in Hentai", tags: ["Hentai"], img: img17, date: "25/12/2024" },
  { id: 9, title: "Content Ideas for OnlyFans", tags: ["OnlyFans, ", "NSFW"], img: img12, date: "24/12/2024" },
  { id: 12, title: "Merry Hentai Christmas", tags: ["Hentai"], img: img18, date: "23/12/2024" },
  { id: 13, title: "Hentai Body Types", tags: ["Hentai, ", "NSFW"], img: img19, date: "10/12/2024" },
  { id: 15, title: "16 Of The BEST Hentai Classics From The 1990s", tags: ["Hentai"], img: img20, date: "27/11/2024" },
];

const tags = {
  Hentai: [11, 14, 1, 10, 12, 13, 15],
  NSFW: [11, 14, 1, 6, 7, 8, 5, 9, 13],
  Anime: [4, 1, 2, 3],
  OnlyFans: [6, 5, 9],
  Educational: [7, 8]
};

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const navigate = useNavigate();

  const gotoPage = async (a) => {
    await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * (5000 - 1000 + 1)) + 2000));
    navigate(`/content/${a}`);
  };

  useEffect(() => {
    if (selectedTag) {
      setFilteredBlogs(blogs.filter(blog => tags[selectedTag]?.includes(blog.id)));
    } else {
      setFilteredBlogs(blogs);
    }
    setPage(1); // Reset to first page on filter change
  }, [selectedTag]);

  const displayedBlogs = filteredBlogs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 text-white" id="blog-page">
      <header className="flex justify-between items-center p-4 bg-opacity-20 backdrop-blur-lg shadow-lg fixed top-0 w-full" id="header">
        <h1 className="text-xl font-bold" id="site-title">Late Night <div className="read">Read</div></h1>
        <nav>
          <ul className="flex gap-4" id="nav-menu">
            <li><button className="nav-button" onClick={() => setSelectedTag(null)}>Home</button></li>
            <li><button className="nav-button" onClick={() => alert('Launching soon')}>Games</button></li>
            <li className="relative" id="tags-menu">
              <button className="nav-button" onClick={() => setSelectedTag('tags')}>Tags</button>
              {selectedTag === 'tags' && (
                <div className="absolute bg-white text-black p-2 rounded shadow-lg" id="tags-dropdown">
                  {Object.keys(tags).map(tag => (
                    <p key={tag} className="cursor-pointer hover:text-blue-500 tag-item" onClick={() => setSelectedTag(tag)}>{tag}</p>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>
      

      <div className="container mx-auto mt-20 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="blog-list">

        {displayedBlogs.map(blog => (
          <motion.div key={blog.id} whileHover={{ scale: 1.01 }} className="blog-card">
            <div className="flex bg-white text-black rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:bg-gray-200 list-content"
                 style={{ backgroundImage: `url(${blog.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
              <h2 className="blog-title" onClick={() => gotoPage(blog.id)}>{blog.title}</h2>
              <div className="date"> {blog.date}</div>
              <div className="tag">{blog.tags}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6 page">
        <button className="px-4 py-2 bg-gray-700 rounded-lg" onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000));
          setPage(page - 1)
          window.scrollTo({ top: 0 });
        }
        
      } disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button className="px-4 py-2 bg-gray-700 rounded-lg" onClick={async () => {
          await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * (4000 - 1000 + 1)) + 1000));
          setPage(page + 1) 
          window.scrollTo({ top: 0 });
        }

        } disabled={page === totalPages}>
          Next
        </button>
      </div>
      <div className="container1">
        <div className="top">Top picks of this week</div>
        <div className="g"></div>
        <div className="list">
{/*           <a className="a" href="https://hentaihaven.xxx/watch/kazoku-haha-to-shimai-no-kyousei/">Kazoku-haha-to-shimai-no-kyousei</a> */}
          <div className="d"></div>
{/*           <a className="b" href="https://hentaihaven.xxx/watch/kanojo-ga-yatsu-ni-dakareta-hi/">Kanojo-ga-yatsu-ni-dakareta-hi</a> */}
          <div className="e"></div>
{/*           <a className="c" href="https://hentaihaven.xxx/watch/maken-no-hime-wa-ero-ero-desu/">Maken-no-hime-wa-ero-ero-desu</a> */}
          <div className="f"></div>
        </div>
      </div>
      <footer style={{ height: "50px" }}></footer>
    </div>
        <div className="Links">
            <a className="unique-class" href="https://txxx.tube/videos/20660585/250213-i4/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videovoyeurhit.com/videos/360947/two-european-female-slaves-and-publi-with-steve-holmes-antonio-ross-and-lyen-parker/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videomanysex.com/video/3147939/poke-her/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videoxshemale.com/videos/1149329/full-bodied-booty-tranzvr/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://senzuri.tube/videos/10283067/01d1322-a-mature-wife-is-vaginal-cum-shot-while-a-young-man-straddles-a-cock-that-can-not-suppress-excitement_07354/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videopornl.com/videos/3564183/love-crystale-max-cortes-in-education-for-this-too-nasty-bitch-mmm100/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videohotmovs.com/videos/12843561/we-cant-get-enough-of-aurora-jolies-big-asses2/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videovjav.com/videos/870909/japanese-261ara-553-limited-scene/?promo=47026" target="_blank">Click</a>
            <a className="unique-class" href="https://videotubepornclassic.com/videos/1204357/all-the-pussy-you-want-to-make-you-enjoy-5-spoken/?promo=47026" target="_blank">Click</a>
                  </div>
      </>
  );
}
