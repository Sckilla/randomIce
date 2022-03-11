export default function helpCopy(newClip){
  navigator.permissions.query({name: "clipboard-write"}).then(result => {
    if (result.state === "granted" || result.state === "prompt") {
      navigator.clipboard.writeText(newClip);
    }
  });
}