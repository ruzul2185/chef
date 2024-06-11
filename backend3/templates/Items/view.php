<section class="content-header">
  <h1>
    Item
    <small><?php echo __('View'); ?></small>
  </h1>
  <ol class="breadcrumb">
    <li><a href="<?php echo $this->Url->build(['action' => 'index']); ?>"><i class="fa fa-dashboard"></i> <?php echo __('Home'); ?></a></li>
  </ol>
</section>

<!-- Main content -->
<section class="content">
  <div class="row">
    <div class="col-md-12">
      <div class="box box-solid">
        <div class="box-header with-border">
          <i class="fa fa-info"></i>
          <h3 class="box-title"><?php echo __('Information'); ?></h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <dl class="dl-horizontal">
            <dt scope="row"><?= __('Name') ?></dt>
            <dd><?= h($item->name) ?></dd>
            <dt scope="row"><?= __('Image') ?></dt>
            <dd><?= h($item->image) ?></dd>
            <dt scope="row"><?= __('Color') ?></dt>
            <dd><?= h($item->color) ?></dd>
            <dt scope="row"><?= __('Size') ?></dt>
            <dd><?= h($item->size) ?></dd>
            <dt scope="row"><?= __('Description') ?></dt>
            <dd><?= h($item->description) ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($item->id) ?></dd>
            <dt scope="row"><?= __('Created At') ?></dt>
            <dd><?= h($item->created_at) ?></dd>
            <dt scope="row"><?= __('Updated At') ?></dt>
            <dd><?= h($item->updated_at) ?></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

</section>
