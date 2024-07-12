<section class="content-header">
  <h1>
    Image
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
          <dd>
                  <?= $this->Html->image($image->name, ['width' => '200', 'height' => '200']) ?>
              </dd>
            <dt scope="row"><?= __('Url') ?></dt>
            <dd><?= h($image->url) ?></dd>
            <dt scope="row"><?= __('Product') ?></dt>
            <dd><?= $image->has('product') ? $this->Html->link($image->product->name, ['controller' => 'Products', 'action' => 'view', $image->product->id]) : '' ?></dd>
            <dt scope="row"><?= __('Review') ?></dt>
            <dd><?= $image->has('review') ? $this->Html->link($image->review->name, ['controller' => 'Reviews', 'action' => 'view', $image->review->id]) : '' ?></dd>
            <dt scope="row"><?= __('Image Type') ?></dt>
            <dd><?= $image->has('image_type') ? $this->Html->link($image->image_type->name, ['controller' => 'ImageTypes', 'action' => 'view', $image->image_type->id]) : '' ?></dd>
            <dt scope="row"><?= __('Id') ?></dt>
            <dd><?= $this->Number->format($image->id) ?></dd>
            <dt scope="row"><?= __('Created') ?></dt>
            <dd><?= h($image->created) ?></dd>
            <dt scope="row"><?= __('Modified') ?></dt>
            <dd><?= h($image->modified) ?></dd>
          </dl>
        </div>
      </div>
    </div>
  </div>

</section>
