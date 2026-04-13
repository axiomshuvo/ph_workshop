/**
 * #1 e.target.name.value [ input filed থেকে value নেওয়ার উপায় ]
 * @2 use form action and formdata in the action handler [ foradata.get("name") দিয়ে value নেওয়া যায় ]
 * #3 controlled field [ input filed এর value state দিয়ে control করা হয় ]
 *
 * @4 uncontrolled field [ input filed এর value state দিয়ে control করা হয় না, form submit করার সময় formdata.get("name") দিয়ে value নেওয়া হয় ]
 *! useRef [ input filed এর value state দিয়ে control করা হয় না, form submit করার সময় useRef.current.value দিয়ে value নেওয়া হয় ]
 *
 * #5 custom hook [ input filed এর value state দিয়ে control করা হয়, custom hook useInputFields ব্যবহার করে control করা হয় ]
 *
 * # props drilling [ props এর মাধ্যমে value পাস করা হয় ]
 * #props drilling solution [ context api এর মাধ্যমে value পাস করা হয় ]
 */
