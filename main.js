const ref = document.referrer;
const aTags = document.querySelectorAll("a");

console.log(ref);

if(ref.includes("instagram")) {
    for(let a of aTags) {
        a.href = a.href.replace("unknown_social", "instagram");
    }
} else if(ref.includes("facebook") || ref.includes("fb")) {
    for(let a of aTags) {
        a.href = a.href.replace("unknown_social", "facebook");
    }
} else if(ref.includes("pinterest")) {
    for(let a of aTags) {
        a.href = a.href.replace("unknown_social", "pinterest");
    }
} else if(ref.includes("twitter") || ref.includes("twimg") || ref.includes("t.co")) {
    for(let a of aTags) {
        a.href = a.href.replace("unknown_social", "twitter");
    }
} else if(ref.includes("linkedin")) {
    for(let a of aTags) {
        a.href = a.href.replace("unknown_social", "linkedin");
    }
} else {
    for(let a of aTags) {
        a.href = a.href.replace("unknown_social", ref);
    }
}