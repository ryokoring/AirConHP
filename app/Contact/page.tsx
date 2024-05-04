export default function Page() {
    return (
      <>
        <h1>Contact us</h1>
        <form action={process.env.NEXT_PUBLIC_NEWT_CONTACT_FORM_ENDPOINT} method="post">
          <label htmlFor="type">お問い合わせ種別</label>
          <select name="type" id="type">
          <option value="男">男</option>
          <option value="女">女</option>
          </select>
          <div>
          <label htmlFor="name">お名前・法人名</label>
          <input id="name" name="name" />
          </div>

          <div>
          <label htmlFor="email">email</label>
          <input id="email" name="email" type="email" />
          </div>

          <div>
          <label htmlFor="phone">電話番号</label>
          <input id="phone" name="phone" type="tel"></input>
          </div>

          <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </>
    )
  }