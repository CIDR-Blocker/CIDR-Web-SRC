<template>
  <div id="app">
    <div class="content animated fadeIn">
      <h1>What it does</h1>
      <p>
        It start off with a connection callback, the plugin will try to find the user within the <code>cidr_whitelist</code> table, letting the user enter if found.
      </p>
      <p>
        Otherwise, it will attempt to match the user's IP towards a range of CIDR records within the <code>cidr_list</code>. If any match is returned, the plugin
        automatically kicks the user from the server and logs it to <code>cidr_log</code> by default.
      </p>
      <h1>Potential Design/Purpose</h1>
      <p>
        <ul>
          <li>
            Block VPN
          </li>
          <li>
            Block certain country or region
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>
