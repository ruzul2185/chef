<ul class="sidebar-menu" data-widget="tree">
  <li class="header">MAIN NAVIGATION</li>
  <li class="treeview">
    <a href="#">
      <i class="fa fa-dashboard"></i> <span>Users</span>
      <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul class="treeview-menu">
      <li><a href="<?php echo $this->Url->build('/users/add'); ?>"><i class="fa fa-circle-o"></i> New User</a></li>
      <li><a href="<?php echo $this->Url->build('/users'); ?>"><i class="fa fa-circle-o"></i>List of Users</a></li>
    </ul>
  </li>

    <li class="treeview">
        <a href="#">
            <i class="fa fa-dashboard"></i> <span>Items</span>
            <span class="pull-right-container">
        <i class="fa fa-angle-left pull-right"></i>
      </span>
        </a>
        <ul class="treeview-menu">
            <li><a href="<?php echo $this->Url->build('/items/add'); ?>"><i class="fa fa-circle-o"></i> New Item</a></li>
            <li><a href="<?php echo $this->Url->build('/items'); ?>"><i class="fa fa-circle-o"></i>List of Items</a></li>
        </ul>
    </li>

</ul>
