import { DefaultLayout } from "..";

function ContentProfile(){
    return (
        <div>Content Profile</div>
    )
}

function Profile() {
    return ( 
        <>
        <DefaultLayout>
            <ContentProfile />
        </DefaultLayout>
        </>
     );
}

export default Profile;