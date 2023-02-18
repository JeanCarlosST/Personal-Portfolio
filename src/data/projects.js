import keyboardTypingSS from "../assets/keyboard-typing-screenshot.png";
import minimalistRedditSS from "../assets/minimalist-reddit-screenshot.png";
import technologies from "./technologies";

const Projects = {
    KeyboardTyping: {
        name: "Keyboard Typing",
        image: keyboardTypingSS,
        technologies: [technologies.React],
        siteLink: "https://keyboard-typing.netlify.app/",
        repositoryLink: "https://github.com/JeanCarlosST/Keyboard-Typing"
    },
    MinimalistReddit: {
        name: "Minimalist Reddit",
        image: minimalistRedditSS,
        technologies: [technologies.React],
        siteLink: "https://minimalist-reddit.netlify.app/",
        repositoryLink: "https://github.com/JeanCarlosST/Minimalist-Reddit"
    }
}

export default Projects;