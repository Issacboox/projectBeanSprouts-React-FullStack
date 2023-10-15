

export default function Register() {
    return (<>
      <main>
        <div className="containerform">
            <div className="row justify-content-center bf-form">
                <h1 className="topic-sign text-center mb-4"><b>Sign up</b></h1>
                <div className="col-md-6 loginForm">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label"><b>Username</b></label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="Input username"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label"><b>Password</b></label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Input password"
                            />
                        </div>
                        <button type="submit" className="btn btn-success btn-block ">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
    </>

    )
}