<template>
    <!--参考 https://qiita.com/k00j/items/c0cf31f888492c87de35-->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/">Portfolio</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/about">about</b-nav-item>
            <b-nav-item to="/works">works</b-nav-item>
            <b-nav-item to="/contact">contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>
