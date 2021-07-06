const index = () => {
    return (
        <><div id="mainMenu">
            <div id="objectiveTruth">
                <h1>
                    حقیقت عینی (objective truth) (علم)
                </h1>
                <div>
                    <a href="/formal-sciences">علوم صوری</a>
                    <ul>
                        <li>
                            <a href="/formal-sciences/algebra">جبر</a>
                        </li>
                        <li>
                            <a href="/formal-sciences/geometry">هندسه</a>
                        </li>
                        <li>
                            <a href="/formal-sciences/linear-algebra">جبر خطی</a>
                        </li>
                        <li>
                            <a href="/formal-sciences/trigonometry">مثلثات</a>
                        </li>
                        <li>
                            <a href="/formal-sciences/calculus">حسابان</a>
                        </li>
                        <li>
                            <a href="/formal-sciences/advanced-math">ریاضیات پیشرفته</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="/natural-sciences">علوم طبیعی</a>
                    <ul>
                        <li>
                            <a href="/natural-sciences/astronomy">نجوم</a>
                        </li>
                        <li>
                            <a href="/natural-sciences/chemistry">شیمی</a>
                        </li>
                        <li>
                            <a href="/natural-sciences/organic-chemistry">شیمی آلی</a>
                        </li>
                        <li>
                            <a href="/natural-sciences/biochemistry">زیست شیمی</a>
                        </li>
                        <li>
                            <a href="/natural-sciences/biology">زیست شناسی</a>
                        </li>
                        <li>
                            <a href="/natural-sciences/anatomy">آناتومی</a>
                        </li>
                        <li>
                            <a href="/natural-sciences/neurology">مغز و اعصاب</a>
                        </li>
                        <li>
                            <a href="/natural-sciences/classical-physics">فیزیک کلاسیک</a>
                        </li>
                        <li>
                            <a href="/natural-sciences/modern-physics">فیزیک مدرن</a>
                        </li>
                    </ul>

                    {
                        //immunology
                        //mycology
                        //botony
                        //history of drugs
                        //pharmacology
                        //microbiology
                    }
                </div>
                <div>
                    <a href="/applied-sciences">علوم کاربردی</a>
                    <partial name="/Views/AppliedSciences/Menu.cshtml" />
                </div>
                <div>
                    <a href="/social-sciences">علوم اجتماعی</a>
                    <partial name="/Views/SocialSciences/Menu.cshtml" />
                </div>
            </div>
            <hr />
            <div id="subjectiveTruth">
                <h1>حقیقت شخصی (personal truth) (من)</h1>
                <ul>
                    <li>
                        <a href="/path">مسیر</a>
                    </li>
                    <li>
                        <a href="/quran">قرآن</a>
                    </li>
                    <li>
                        <a href="/dev-circle">مفحل توسعه</a>
                    </li>
                    <li>
                        <a href="/language">زبان</a>
                    </li>
                    <li>
                        <a href="/music">موسیقی</a>
                    </li>
                    <li>
                        <a href="/ideas">ایده ها</a>
                    </li>
                    <li>
                        <a href="/thoughts">فکرها</a>
                    </li>
                    <li>
                        <a href="/default/about">معرفی</a>
                    </li>
                    <li>
                        <a href="/default/contact">تماس با من</a>
                    </li>
                    <li>
                        <a href="/default/nefcanto">نفکانتو</a>
                    </li>
                    <li>
                        <a href="/default/resume">رزومه</a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default index;