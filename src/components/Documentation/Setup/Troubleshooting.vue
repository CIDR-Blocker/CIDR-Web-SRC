<template>
  <div id="app">
    <div class="content animated fadeIn">
      <h1>Troubleshooting</h1>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <b-taglist attached>
              <b-tag type="is-primary">Sourcemod</b-tag>
              <b-tag type="is-dark">Could not find driver "mysql"</b-tag>
            </b-taglist>
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ol>
              <li>
                Make sure <code>dbi.mysql.ext</code> exists within Sourcemod's extensions folder, and check if it's loaded using <code>sm exts list</code>
              </li>
              <li>
                <b-tag type="is-success">Linux</b-tag> Make sure it's executable via <code>chmod u+x dbi.mysql.ext.so</code>
              </li>
              <li>
                <b-tag type="is-success">Linux</b-tag> Install <code>zlib</code>
                <ul style="list-style-type:none">
                  <li>
                    <b-taglist attached>
                      <b-tag type="is-black">Debian/Ubuntu</b-tag>
                      <b-tag type="is-info">32 bit</b-tag>
                      <b-tag type="is-danger">apt-get install zlib1g</b-tag>
                    </b-taglist>
                  </li>
                  <li>
                    <b-taglist attached>
                      <b-tag type="is-black">Debian/Ubuntu</b-tag>
                      <b-tag type="is-info">64 bit</b-tag>
                      <b-tag type="is-danger">apt-get install lib32z1</b-tag>
                    </b-taglist>
                  </li>
                  <li>
                    <b-taglist attached>
                      <b-tag type="is-black">Mandriva</b-tag>
                      <b-tag type="is-info">32/64 bit</b-tag>
                      <b-tag type="is-danger">urpmi zlib1</b-tag>
                    </b-taglist>
                  </li>
                  <li>
                    <b-taglist attached>
                      <b-tag type="is-black">Fedora</b-tag>
                      <b-tag type="is-info">32/64 bit</b-tag>
                      <b-tag type="is-danger">yum install zlib.i686</b-tag>
                    </b-taglist>
                  </li>
                  <li>
                    <b-taglist attached>
                      <b-tag type="is-black">SUSE</b-tag>
                      <b-tag type="is-info">32 bit</b-tag>
                      <b-tag type="is-danger">zypper install libz1</b-tag>
                    </b-taglist>
                  </li>
                  <li>
                    <b-taglist attached>
                      <b-tag type="is-black">SUSE</b-tag>
                      <b-tag type="is-info">64 bit</b-tag>
                      <b-tag type="is-danger">zypper install libz1-32bit</b-tag>
                    </b-taglist>
                  </li>
                </ul>
              </li>
              <li>
                <b-tag type="is-success">Linux</b-tag> Use <code>ldd -d -r dbi.mysql.ext.so</code> to look for missing dependencies
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
