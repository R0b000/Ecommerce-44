const SignInFooter = () => {
    return (
        <>
        <div className="flex w-[1104px] h-[64px] items-center justify-between mt-[-15px]">
            <div id="footer-links" className="flex p-1 font-light">
                <select className='flex gap-10 rounded-md justify-center items-center w-50' name="language">
                    <option style={{backgroundColor: '#3a3e43'}} value='en'>English (United States)</option>
                    <option style={{backgroundColor: '#3a3e43'}} value='en'>English (United States)</option>
                </select>
            </div>
            <div id="footer-links" className="flex gap-5 font-light text-sm cursor-pointer">
                <span className="p-1 rounded-md duration-100">Help</span>
                <span className="p-1 rounded-md duration-100">Privacy</span>
                <span className="p-1 rounded-md duration-100">Terms</span>
            </div>
        </div>
        </>
    )
}

export default SignInFooter