<template>
  <div id="app">
    <div class="content animated fadeIn">
      <h1>Troubleshooting</h1>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <b-taglist attached>
              <b-tag type="is-primary">Sourcemod</b-tag>
              <b-tag type="is-dark">Database failure: Could not find database conf "cidr_blocker"</b-tag>
            </b-taglist>
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p>
              You either forgot to add a <code>cidr_blocker</code> section in your <code>databases.cfg</code> or the section is invalid, causing parsing error.
            </p>

            <b-collapse :open="false">
              <button class="button is-primary" slot="trigger">databases.cfg Example</button>
              <pre>
  "Databases"
  {
  	"driver_default"		"mysql"

  	// When specifying "host", you may use an IP address, a hostname, or a socket file path

  	"default"
  	{
  		"driver"			"default"
  		"host"				"DATABASE_HOST"
  		"database"			"sourcemod"
  		"user"				"DATABASE_USERNAME"
  		"pass"				"DATABASE_PASSWORD"
  		//"timeout"			"0"
  		//"port"			"0"
  	}

  	"cidr_blocker"
  	{
  		"driver"			"default"
  		"host"				"DATABASE_HOST"
  		"database"			"DATABASE"
  		"user"				"DATABASE_USERNAME"
  		"pass"				"DATABASE_PASSWORD"
  		//"timeout"			"0"
  		//"port"			"0"
  	}

  	"storage-local"
  	{
  		"driver"			"sqlite"
  		"database"			"sourcemod-local"
  	}

  	"clientprefs"
  	{
  		"driver"			"sqlite"
  		"host"				"localhost"
  		"database"			"clientprefs-sqlite"
  		"user"				"root"
  		"pass"				""
  		//"timeout"			"0"
  		//"port"			"0"

  	}
  }
              </pre>
            </b-collapse>
          </div>
        </div>
      </div>
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
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <b-taglist attached>
              <b-tag type="is-primary">Discord</b-tag>
              <b-tag type="is-dark">I need more help!</b-tag>
            </b-taglist>
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p>
              Before asking for help, please have <code>errors_%DATE%.log</code> ready, located in <code>tf/addons/sourcemod/logs</code>
            </p>
            <a href="https://discord.gg/gh8uMa9" target="_blank">
              <b-taglist attached>
                <b-tag type="is-black">Join</b-tag>
                <b-tag type="is-info">Discord</b-tag>
                <b-tag type="is-primary">gh8uMa9</b-tag>
              </b-taglist>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
