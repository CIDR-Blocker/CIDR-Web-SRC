<template>
  <div id="app">
    <div class="content animated fadeIn">
      <h1>Installation</h1>
      <ol>
        <li>
          Downloading the latest version from the <a href="https://github.com/CIDR-Blocker/CIDR-Blocker/releases">release page.</a>
        </li>
        <li>
          Upload <code>CIDR_Blocker.smx</code> to your Sourcemod plugins folder.
        </li>
        <li>
          Create a <code>cidr_blocker</code> section within Sourcemod's <code>databases.cfg</code> config with your database parameters.
        </li>
        <li>
          Optionally but recommended, to block most VPNs: import <a href="https://github.com/CIDR-Blocker/CIDR-Blocker/blob/master/imports/datacenters.sql">datacenters.sql</a> into <code>cidr_list</code> table.
        </li>
      </ol>
    </div>
  </div>
</template>
