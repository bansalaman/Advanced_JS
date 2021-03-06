const txtPostName = document.getElementById('txtpostName');
const txtPostMsg = document.getElementById('txtpostMsg');
const btnNewPostMsg = document.getElementById('btnNewpostMsg');

function updatePostbox(PostPost) {
    var PostData = '<p><b>' + PostPost.Post;
    PostData += '</b> said: ' + PostPost.message;
    PostData += ' - <small>' + PostPost.date + '</small><p>';

    // inject into HTML list element
    var currentPostbox = document.getElementById('postbox').innerHTML;
    document.getElementById('postbox').innerHTML = currentPostbox + PostData;
    for(var i = 0; i < 10000; i++){
        document.body.appendChild(document.createElement('div'))
    }
    var ref = [];
    ref.push(new Array(1000).join('x'))
}

// new Postbox entry
btnNewPostMsg.addEventListener('click', e => {
    const Post = txtPostName.value;
    const msg = txtPostMsg.value;
    const now = new Date();
    const PostPost = {
        Post: Post,
        message: msg,
        date: now.toUTCString()
    };

    // update posts
    updatePostbox(PostPost);

    // clear textbox
    document.getElementById('txtpostName').value = '';
    document.getElementById('txtpostMsg').value = '';
    console.clear();
});