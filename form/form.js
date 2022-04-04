<section id='formContent'>
<h2>면접제안</h2>
<div className='container'>
    <form action='/cyhpreinterview?type=write' method='post' name='meetingSuppose'>
        <div className='inner'>
            <dl className='row mx-0'>
                <dt className='col-md-3'><label for='subject'>제목</label></dt>
                <dd className='col-md-9'>
                    <input type="text" name='subject' id='subject'></input>
                </dd>
                <dt className='col-md-3'><label for='wr_content'>내용</label></dt>
                <dd className='col-md-9'>
                    <textarea rows="5" id="wr_content" name="wr_content">

                    </textarea>
                </dd>
            </dl>
            <input type="submit" value="제안하기"></input>
        </div>
    </form>
</div>
</section>